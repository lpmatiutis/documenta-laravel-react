<?php

namespace App\Http\Controllers\Test;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Facturador;
use App\Entidad;

class testController extends Controller
{
   public function index(){

   }

   public function test(Request $request){
       return "Metodo test";
   }

   public function getFacturador(Request $request){
    $facturador = Facturador::all();
    return $facturador;
    die();
   }

   public function getFact(Request $request){
     return $facturador = Facturador::with('entidad')->get();
     //$facturador->getRelations();
    //return Facturador::entidad()->Entidad;
    //dd($users->toJson());
    //return Facturador::entidad()->load('entidad');
    //return $users;
   }

   public function getEntidad(Request $request){
    return $entidad = Entidad::with('localidad')->get();
   }
}
