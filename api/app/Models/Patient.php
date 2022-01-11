<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    
    protected $fillable = ['code_patient', 'nom', 'prenom', 'date_naiss', 'contact', 'adresse', 'profession', 'sexe', 'statut'];
}
