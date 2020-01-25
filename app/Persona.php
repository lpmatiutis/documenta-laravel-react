<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    //
    protected $connection = 'base';
    protected $primary = 'idPersona';
    protected $table = 'persona';
}
