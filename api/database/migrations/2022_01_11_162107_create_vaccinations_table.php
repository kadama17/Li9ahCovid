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
            $table->id();
            $table->string('code_patient');
            $table->string('code_vaccin');
            $table->date('date_dose_1');
            $table->date('rdv');
            $table->date('date_dose_2');
            $table->foreign('code_patient')->references('code_patient')->on('patients');
            $table->foreign('code_vaccin')->references('code_vaccin')->on('vaccins');

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
