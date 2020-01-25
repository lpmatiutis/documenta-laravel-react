<?php

namespace App\Http\Controllers\reddpago;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Servicio;

class ServicioController extends Controller
{
    //
    public function getServicio(Request $request){
        $servicio = new Servicio;
        $servicio->setConnection('reddepago');
        $servicio = Servicio::all();
        return $servicio;
}
}
