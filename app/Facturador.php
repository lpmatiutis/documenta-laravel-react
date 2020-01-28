<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Facturador extends Model
{
    protected $connection = 'reddepago';
    protected $table = 'facturador';
    
    //protected $fillable = ['descripcion'];
    //protected $primaryKey = 'id_facturador';
    public function entidad(){
        return $this->hasOne('App\Entidad', 'id_entidad', 'entidad');
    }
}
