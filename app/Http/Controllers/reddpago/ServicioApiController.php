<?php

namespace App\Http\Controllers\reddpago;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
}
