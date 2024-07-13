import './index.css';
import React from 'react';
import multimedia from '../Images/multimedia.png';
import trevor from '../Images/born a crime.jpg';
import NavBar from '../NavBar';


const Trevor = () =>{
return(
    <div className='Container'>

   <NavBar/>
  <div className='title'>
<img src={trevor} alt="born a crime book cover" className='trevor'></img>
<div className='title-words'>
<p ><strong>Beyond the Laughter:</strong></p>
<p>Delving into Trevor Noah's 'Born a Crime'</p>
  </div>
  </div>
<div className='horizontal-line'></div>
<div className='book-review-comments'>
<p><strong>REVIEW</strong></p>
<strong>"This book has sat in my home since it was published and I’m finally
 reading it in 2024 and recommending it to everyone with a pulse. <br/>
Trevor Noah’s story telling is one of a kind. 
He has a true gift for sharing his experiences, providing comedic relief, 
and educating us on South Africa’s history and current events. <br/>
He doesn’t shy away from the hard truths and calls for growth and progress.
 I have a deep respect for him and his family and I’m so happy for all his success.
One of my new favorite books! And it’s a beautiful ode to his mother!"</strong>
<p>~Brittaney B.</p>
</div><br/>
<div className='body-trevor'>
<h2>Relevance to Current Social Issues</h2>
<h3>Rethinking Racial Identity and Fluidity</h3>
Trevor Noah's memoir challenges conventional notions of racial identity by recounting his experience as a mixed-race child in apartheid-era South Africa. Born to a black Xhosa mother and a white Swiss father, Noah was considered "colored" under apartheid laws, which criminalized interracial relationships. <br/>
His existence itself was deemed illegal, highlighting the arbitrary and oppressive nature of racial classifications at the time.<br/>
 Noah navigates various racial identities throughout his childhood, often having to adapt his behavior and language depending on the racial context. His ability to "code-switch" becomes a survival mechanism, illustrating the fluidity of racial identity and the complexities of navigating a racially stratified society.<br/>
In contemporary society, discussions around racial identity have become increasingly nuanced and intersectional. Noah's narrative prompts us to reconsider the limitations of binary racial categories and encourages a more inclusive understanding of identity that acknowledges diverse lived experiences.
<h3>Privilege and Intersectionality</h3>
Noah's memoir also sheds light on privilege and disadvantage within racial contexts. Despite being classified as black under apartheid, Noah's lighter skin tone afforded him certain privileges denied to darker-skinned individuals. This aspect of his identity highlights intra-group disparities and challenges 
simplistic narratives about race and privilege.<br/>
Noah reflects on how his appearance allowed him to navigate different social spheres and access opportunities that were often closed to others from his community. This privilege is juxtaposed with the systemic barriers faced by his mother and others in their community.<br/>
The concept of privilege and its intersection with race, gender, and socioeconomic status remains a critical issue in contemporary social justice movements. Noah's story encourages us to critically examine how privilege operates within marginalized communities and advocate for policies that address these disparities.<br/>
<h3>Gender Dynamics and Resilience</h3>
Central to Noah's memoir is the portrayal of his mother, Patricia Nombuyiselo Noah, whose strength and resilience as a single mother in apartheid South Africa serves as a powerful example of gender empowerment. 
<br/>Patricia's story challenges traditional gender roles and underscores the leadership and agency of women often overlooked in historical narratives.
Patricia's resourcefulness and determination to provide for her son amidst poverty and political turmoil exemplify the resilience of women in the face of systemic oppression.Her influence shapes Noah's worldview and instills in him a deep respect for women's strength.
In today's context, discussions around gender equality and empowerment continue to be crucial.<br/> Patricia's narrative encourages us to uplift and amplify the voices of women who defy societal expectations and advocate for policies that promote gender equity and inclusivity.
<p className='quote'>
“We tell people to follow their dreams,<br/> but you can only dream of what you can imagine, and, <br/>
depending on where you come from, <br/>your imagination can be quite limited.”

</p>
</div>

  </div>
)}
export default Trevor