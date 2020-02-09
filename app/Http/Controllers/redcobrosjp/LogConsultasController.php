<?php

namespace App\Http\Controllers\redcobrosjp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\LogConsultas;

class LogConsultasController extends Controller
{
    //
    public function getLogConsultas(Request $request){
        $logConsultas = new LogConsultas;
        //print('vino aqui');
        $logConsultas->setConnection('redcobrosjp');
        //print('vino aqui2');
        $logConsultas = LogConsultas::all();
        //print('vino aqui3');
        return $logConsultas;
    }

    public function getLogConsultasId($id){
        $logConsultas = new LogConsultas;
        //print('vino aqui');
        $logConsultas->setConnection('redcobrosjp');
        //print('vino aqui2');
        $logConsultas = LogConsultas::select('id_log_consulta', 'referencia_consulta')
                                    ->where('id_servicio', $id)
                                    ->where('cod_retorno', 0)
                                    ->groupBy('referencia_consulta', 'id_log_consulta')
                                    ->take(10)
                                    ->get();
        //print('vino aqui3');
        return $logConsultas;
    }
}
