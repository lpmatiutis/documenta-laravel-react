<?php

namespace App\Http\Controllers\reddpago;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\TipoZona;

class TipoZonaController extends Controller
{
    // return de get todas las zonas
    public function index(){
        return TipoZona::all();
    }

    public function show($id){
        return TipoZona::findOrFail($id);
    }

    public function create(Request $request){
        $tipoZona = TipoZona::create($request->all());
        return response()->json($tipoZona, 201);
    }

    public function update(Request $request, $id){
        echo($request);
        $tipoZona = TipoZona::find($id);
        $tipoZona->descripcion = $request->input('descripcion'); //uno forma de recuperar
        $tipoZona->codigo = $request->codigo; //forma mas eficiente de recuperar
        $tipoZona->save();
        //$tipoZona->update($request->all());
        return response()->json($tipoZona, 200);
    }

    public function delete($id){
        $tipoZona = TipoZona::find($id);
        $tipoZona->delete();
        return response()->json(null, 204);
    }
}
