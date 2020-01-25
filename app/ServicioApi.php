<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServicioApi extends Model
{
    //
    protected $connection = 'reddepago';
    //protected $primary = 'idtipozona';
    protected $table = 'servicio_api';
}
