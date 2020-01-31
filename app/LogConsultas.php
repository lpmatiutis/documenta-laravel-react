<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LogConsultas extends Model
{
    //

    protected $connection = 'redcobrosjp';

    protected $primaryKey = 'id_log_consulta';

    protected $hidden = array('id_gestion', 'xml');

    protected $table = 'log_consultas';

}
