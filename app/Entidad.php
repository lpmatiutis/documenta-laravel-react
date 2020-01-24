<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entidad extends Model
{
    //
    protected $table = 'entidad';

    //protected $visible = ['nombre'];

    public function facturador(){
        return $this->belongsTo('App\Facturador');
    }

    public function localidad(){
        return $this->hasOne('App\Localidad', 'id_localidad', 'localidad');
    }
}
