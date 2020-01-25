<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoZona extends Model
{
    //
    protected $connection = 'reddepago';
    public $timestamps = false;
    protected $primary = 'idtipozona';
    protected $fillable = ['idtipozona', 'descripcion', 'codigo'];
    protected $primaryKey = 'idtipozona';
    protected $table = 'tipozona';
}
