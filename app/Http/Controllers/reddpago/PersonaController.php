<?php

namespace App\Http\Controllers\reddpago;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Persona;

class PersonaController extends Controller
{
    //
    public function getPersona(Request $request){
        $persona = new Persona;
        $persona->setConnection('base');
        $persona = Persona::all();
        return $persona;
}
}
