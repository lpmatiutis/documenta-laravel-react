<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Localidad extends Model
{
    protected $table = 'localidad';

    //protected $visible = ['nombre'];

    public function entidad(){
        return $this->belongsTo('App\Entidad');
    }
}
