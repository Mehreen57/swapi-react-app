import moment from 'moment';
// format Date
export default function Date({created}){
    return(
      moment((created)).format("DD MMMM, YYYY")
    )
  }