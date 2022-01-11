<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVaccinsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vaccins', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code_vaccin');
            $table->string('nom_vaccin');
            $table->string('description');
            $table->integer('quantite');
            $table->date('date_exp');
            $table->integer('nbr_dose');
            $table->timestamps();

            
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vaccins');
    }
}
