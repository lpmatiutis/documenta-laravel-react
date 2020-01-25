<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servicio extends Model
{
    //
    protected $connection = 'reddepago';
    protected $primary = 'idServicio';
    protected $table = 'servicio';
}
