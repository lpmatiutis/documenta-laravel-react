<?php

namespace App\Http\Controllers\reddpago;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\moneda;

class monedaController extends Controller
{
    //
    public function getMoneda(Request $request){
        $moned = new moneda;
        $moned->setConnection('reddepago');
        $moned = moneda::all();
        return $moned;
}
}