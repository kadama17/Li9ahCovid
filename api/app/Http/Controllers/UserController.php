<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
    */
    public function index()
    {
        $users = User::all();
        return response()->json($users);
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

    public function login(Request $request){ 
        //User check
        $email = $request->input('email');
        $password = $request->input('password');
   
        $user = User::where('email', '=', $email)->first();
        if (!$user) {
           return response()->json(['success'=>false, 'message' => 'Login Fail, please check email id']);
        }
        if (!Hash::check($password, $user->password)) {
           return response()->json(['success'=>false, 'message' => 'Login Fail, pls check password']);
        }
           return response()->json(['success'=>true,'message'=>'success', 'data' => $user]);
        
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $data['matricule'] = $request['matricule'];
        $data['name'] = $request['name'];
        $data['date_naissance'] = $request['date_naissance'];
        $data['email'] = $request['email'];
        $data['type'] = $request['type'];
        $data['sexe'] = $request['sexe'];
        $data['password'] = Hash::make($request['password']);

    

        User::create($data);
        return response()->json([
            'message' => "Données enregistrées avec succès",
            'success' => true
        ], 200);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $users= User::find($id);
        return response()->json($users);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vaccin  $vaccin
     * @return \Illuminate\Http\Response
     */
    public function edit(User $vaccin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */


    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'matricule' => '',
            'name' => '',
            'date_naissance' => '',
            'email' => '',
            'password' => '',
            'type' => '',
            'sexe'=>'',
        ]);

        User::whereId($id)->update($validatedData);

        return response()->json([
            'message' => 'User misa à jour!'
        ]);
        return redirect('/');

    }





    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vaccin  $vaccin
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([
            'message' => 'vaccin supprimé'
        ]);
    }


    public function logout()
    {
        auth()->logout();
        return response()->json([
            'message' => 'utilisateur déconnecté'
        ]);
    }
}
