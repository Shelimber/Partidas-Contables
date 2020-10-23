<?php

	class connection{
	
	private $con;
	
	public function __construct(){

			$this->con=new mysqli("localhost","root","root","audiinfo2");
		}
		public function get_connection(){
			return $this->con;
		}
	}
?>