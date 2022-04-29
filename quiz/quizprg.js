
 var score = 0 ; 
 var askq = 0  ;
 
 var rdsl = 0 ;
 ques = new Array();
 opta = new Array() ;
 optb = new Array() ;
 optc = new Array() ;
 crt = new Array() ;
 
 ques[0] ="Which is the national animal of India?" ;
 opta[0] ="Tiger" ;
 optb[0] ="Lion" ;
 optc[0] ="Dog" ;
 crt[0] = "a" ;
 
 ques[1] = "Sharavati projects is in ?" ;
 opta[1] = "Orissa" ;
 optb[1] = "Kerala" ;
 optc[1] = "Karnataka " ;
 crt[1] = "c";
 
 ques[2] = "Country that was called as Land of Rising Sun ? " ;
 opta[2] = "Russia" ;
 optb[2] = "Japan" ;
 optc[2] = "Korea " ;
 crt[2] = "b"  ;
 
 
 ques[3] = "Pink city in India is ?" ;
 opta[3] = "Mysore" ;
 optb[3] = "Jaipur " ;
 optc[3] = "Hyderabad " ;
 crt[3] = "b"  ;
 
 ques[4] = "The headquarters of the coffee board of India is ?" ;
 opta[4] = "Mysore " ;
 optb[4] = "Cochin " ;
 optc[4] = "Bangalore " ;
 crt[4] = "c"  ;
 
 ques[5] = "The largest fresh water lake in India is ? ";
 opta[5] = "Kolleru Lake " ;
 optb[5] = "Chilka Lake " ;
 optc[5] = "Pulicat Lake " ;
 crt[5] = "a"  ;
 
 ques[6] = "The largest river in India is ? " ;
 opta[6] = "Yamuna " ;
 optb[6] = "Kaveri " ;
 optc[6] = "Ganga " ;
 crt[6] = "c"  ;
 
 ques[7] = "The oldest literary work available in Tamil was ?" ;
 opta[7] = "Thirukkural " ;
 optb[7] = "Tholkappiyam " ;
 optc[7] = "Silappadikaram " ;
 crt[7] = "b"  ;
 
 ques[8] = "Which city is famous for Cotton Industry in TamilNadu ?" ;
 opta[8] = "Chennai " ;
 optb[8] = "Trichy " ;
 optc[8] = "Coimbatore " ;
 crt[8] = "c"  ;
 
 ques[9] = "Name the plant important in sericulture ?";
 opta[9] = "Mulberry" ;
 optb[9] = "Pea" ;
 optc[9] = "Cassia" ;
 crt[9] = "a"  ;
 
function quiz()
 {
 
    switch( document.f.sub.value)
      {
		   case "Begin"  :
		   case "Next"   :
		        
				clear_rd() ;
				q.innerHTML = ques[askq] ;
				
            	opa.innerHTML = opta[askq] ;
				opb.innerHTML = optb[askq] ;
				opc.innerHTML = optc[askq] ;
				document.f.sub.value="Submit" ;
				break ;
				
			case "Submit" :
					  rdsl = 0 ;
			          rdsl = chk_sel();
				if(rdsl == 0)
				{	
					if(document.f.Ans.value == crt[askq] )
					  {
						score = score+1 ; pic.src="crct.gif" ;
					  }
					else
					  {
						pic.src = "wrng.gif" ;
					  }
						
					document.f.rd.value = score + "  /  " + ( askq+1) ;;
			
				
				document.f.sub.value = "Next" ;
				askq++ ;
				if(askq > 9 )
				 document.f.sub.value = "Over" ;
				
				
				break ;
		}
     }
	 
 }
 
 function clear_rd()
 {
  document.f.Ans[0].checked = false ;
  document.f.Ans[1].checked = false ;
  document.f.Ans[2].checked = false ;
  pic.src = "blank.png" ;
 }
function chk_sel()
{
	if(document.f.Ans[0].checked == false &&  document.f.Ans[1].checked == false &&  document.f.Ans[2].checked == false ) 
		return(1) ;
    else 
		return ( 0 ) ;
}