<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $patients = Patient::all();
        return response()->json($patients);
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
        $data['nom'] = $request['nom'];
        $data['prenom'] = $request['prenom'];
        $data['contact'] = $request['contact'];
        $data['adresse'] = $request['adresse'];
        $data['profession'] = $request['profession'];
        $data['sexe'] = $request['sexe'];
        $data['statut'] = $request['statut'];
        $data['date_naiss'] = $request['date_naiss'];


        Patient::create($data);
        return response()->json([
            'message' => "Données enregistrées avec succès",
            'success' => true
        ], 200);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $patients = Patient::find($id);
        return response()->json($patients);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */


    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'code_patient' => '',
            'nom' => '',
            'prenom' => '',
            'date_naiss' => '',
            'contact' => '',
            'adresse' => '',
            'profession' => '',
            'sexe' => '',
            'statut' => '',

        ]);

        Patient::whereId($id)->update($validatedData);

        return response()->json([
            'message' => 'patient misa à jour!'
        ]);
        return redirect('/');

    }





    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient $patient)
    {
        $patient->delete();
        return response()->json([
            'message' => 'patient supprimé'
        ]);
    }
}
