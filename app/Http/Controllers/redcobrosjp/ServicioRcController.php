<?php

namespace App\Http\Controllers\redcobrosjp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ServicioRc;

class ServicioRcController extends Controller
{
    //
    public function getServicioRc(Request $request){
        $serviciorc = new ServicioRc;
        //print('vino aqui');
        $serviciorc->setConnection('redcobrosjp');
        //print('vino aqui2');
        $serviciorc = ServicioRc::all();
        //print('vino aqui3');
        return $serviciorc;
}

    public function getServicioRcId($id){
        $serviciorc = new ServicioRc;
        //print('vino aqui');
        $serviciorc->setConnection('redcobrosjp');
        //print('vino aqui2');
        $serviciorc = ServicioRc::find($id);
        //print('vino aqui3');
        return $serviciorc;
    }
}
