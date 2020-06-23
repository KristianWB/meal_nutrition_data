<?php

// if there is no constant called __CONFIG__, do not load this file.
if(!defined('__CONFIG__')){
exit('You do not have a config file');
}

class User {

	private $con;

	public $email;
	public $user_id;
	public $f_name;
	public $l_name;

	public function __construct(int $user_id) {
		$this->con = DB::getConnection();

		$user_id = Filter::Int( $user_id );

		$user = $this->con->prepare("SELECT user_id, email, f_name, l_name FROM users WHERE user_id = :user_id LIMIT 1");
		$user->bindParam(':user_id', $user_id, PDO::PARAM_INT);
		$user->execute();

		if($user->rowCount() == 1) {
			$user = $user->fetch(PDO::FETCH_OBJ);

			$this->email    = (string) $user->email;
			$this->user_id  = (int) $user->user_id;
			$this->f_name = (string) $user->f_name;
			$this->l_name = (string) $user->l_name;
		} else {
			//no user.
			//Redirect to logout
			header("Location: /logout.php"); exit;
		}
	}

	public static function Find($email, $return_assoc = false) {

		$con = DB::getConnection();
		//make sure the user does not exist
		$email = (string) Filter::String( $email );

		$findUser = $con->prepare("SELECT user_id, password, f_name, l_name FROM users WHERE email = LOWER(:email) LIMIT 1");
		$findUser->bindParam(':email', $email, PDO::PARAM_STR);
		$findUser->execute();

		if($return_assoc) {
			return $findUser->fetch(PDO::FETCH_ASSOC);
		}

		$user_found = (boolean) $findUser->rowCount();

		return $user_found;
	}
}
?>