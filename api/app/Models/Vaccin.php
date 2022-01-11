<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vaccin extends Model
{
    use HasFactory;
    protected $fillable = ['code_vaccin', 'nom_vaccin','description', 'quantite', 'date_exp', 'nbr_dose'];

}
