<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vaccination extends Model
{
    use HasFactory;
    protected $fillable = ['id_patient', 'nom_vaccin','date_dose_1', 'rdv', 'date_dose_2'];

}
