import PropComp from "./PropComp";
//props are nothing but read only properties that are shared between the components
// A parent component can send data to the child component
function ParentProp()
{
   return (
    <div>
        <PropComp name="krishna" client="centrica" id={2263041} billable ={true} />
        <PropComp name ="teja" client ="centrica ukh" id ={2263234} billable ={true}/>
        <PropComp name ="Abhishek" client ="centrica UKB" id ={2263200} billable ={true}/>
        <PropComp name ="pruthvi" client ="Linklon" id ={2263100} billable ={false}/>
        
    </div>

   );
}

export default ParentProp;