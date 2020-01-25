<?php

namespace App\Http\Controllers\reddpago;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Cliente;

class ClienteController extends Controller
{
    //
    public function getCliente(Request $request){
        $cliente = new Cliente;
        $cliente->setConnection('reddepago');
        $cliente = Cliente::all();
        return $cliente;
}
}
