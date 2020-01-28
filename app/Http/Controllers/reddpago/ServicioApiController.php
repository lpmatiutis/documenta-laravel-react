<?php

namespace App\Http\Controllers\reddpago;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\ServicioApi;

class ServicioApiController extends Controller
{
    //
    public function getServicioApi(Request $request){
        $servicioApi = new ServicioApi;
        //$servicioApi->setConnection('reddepago');
        $servicioApi = ServicioApi::all();
        return $servicioApi;
}

    public function getAllServicioApi(){
        $servicioApi = new ServicioApi();
        $servicioApi2 = DB::select(' SELECT * FROM reddepago.get_servicio_api3() ');
        $servicioApi = $servicioApi2;
        return response()-> json($servicioApi, 200, [],  JSON_UNESCAPED_SLASHES);
    }
}
