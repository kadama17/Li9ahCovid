<?php

namespace App\Http\Controllers;

use App\Models\Vaccination;
use Illuminate\Http\Request;

class VaccinationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vaccins = Vaccination::all();
        return response()->json($vaccins);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data['code_patient'] = $request['code_patient'];
        $data['code_vaccin'] = $request['code_vaccin'];
        $data['date_dose_1'] = $request['date_dose_1'];
        $data['rdv'] = $request['rdv'];
        $data['date_dose_2'] = $request['date_dose_2'];
    
        Vaccination::create($data);
        return response()->json([
            'message' => "Données enregistrées avec succès",
            'success' => true
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vaccination  $vaccination
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         $vaccinations = Vaccination::find($id);
        return response()->json($vaccinations);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vaccination  $vaccination
     * @return \Illuminate\Http\Response
     */
    public function edit(Vaccination $vaccination)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vaccination  $vaccination
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'code_patient' => 'required',
            'code_vaccin' => 'required',
            'date_dose_1' => 'required',
            'rdv' => 'required',
            'date_dose_2' => 'required',
          
        ]);

        Vaccination::whereId($id)->update($validatedData);

        return response()->json([
            'message' => 'Vaccination misa à jour!'
        ]);
        return redirect('/');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vaccination  $vaccination
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vaccination $vaccination)
    {
        //
    }
}
