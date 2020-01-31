<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServicioRc extends Model
{
    //
    protected $connection = 'redcobrosjp';

    //protected $fillable = ['descripcion'];

    protected $hidden = array('imagen');
    protected $primaryKey = 'id_servicio';
    
    protected $table = 'servicio_rc';


}
