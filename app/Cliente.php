<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    //
    protected $connection = 'reddepago';
    protected $primary = 'idCliente';
    protected $table = 'cliente';
}
