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
        $servicioApi->setConnection('reddepago');
        $servicioApi = ServicioApi::all();
        return $servicioApi;
}

    public function getAllServicioApi(){
        // $servicioApi = DB::select('select reddepago.get_servicio_api()');
        // return $servicioApi->toArray();
        $servicioApi = new ServicioApi();
        $servicioApi2 = $servicioApi->hydrate(
            DB::select('select reddepago.get_servicio_api()')
        );
        $servicioApi = $servicioApi2;
        //return $servicioApi->toJson(JSON_PRETTY_PRINT);
        //return json_encode($servicioApi, JSON_UNESCAPED_SLASHES);
        //return response()->json($servicioApi, 200, [],  JSON_UNESCAPED_UNICODE);
        $coleccion = collect($servicioApi);
        return $coleccion;
    }
}
