<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVaccinationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vaccinations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_patient')->unsigned();
            $table->string('nom_vaccin');
            $table->date('date_dose_1');
            $table->date('rdv');
            $table->date('date_dose_2')->nullable();
            $table->foreign('id_patient')->references('id')->on('patients');

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
        Schema::dropIfExists('vaccinations');
    }
}
