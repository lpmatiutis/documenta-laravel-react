<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class moneda extends Model
{
    //
    protected $connection = 'reddepago';
    protected $primary = 'idtipozona';
    protected $table = 'tipozona';
}
