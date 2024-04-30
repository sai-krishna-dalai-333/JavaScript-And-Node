import { PropTypes} from 'prop-types';
function PropComp(props)
{
    return (
        <div>
            <p> Name : {props.name}</p>
            <p>Client : {props.client}</p>
            <p> Employee ID : {props.id} </p>
            <p> Billability :{props.billable ? "Yes" : "No" }</p>
        </div>

    );
}

PropComp.propTypes = {
    name: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    billable: PropTypes.bool.isRequired,
  }; 

export default PropComp;