import { GET_SHIPMENT, FIND_SHIPMENT, UPDATE_SHIPMENT, REMOVE_SHIPMENT, CREATE_SHIPMENT } from "../constants";

const initialState = {
  shipment: {},
};

const shipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHIPMENT:
      return {
        ...state,
        shipment: action.payload, ///payload the f ure talkin about?
      };
    case FIND_SHIPMENT:
      const findShipmentById = state.shipment.find((val) => String(val.id) === String(action.payload));
      return {
        ...state,
        shipment: findShipmentById,
      };
    case UPDATE_SHIPMENT:
      return {
        ...state,
        shipment: action.payload,
      };
    case CREATE_SHIPMENT:
      return {
        ...state,
        shipment: action.payload,
      };
    case REMOVE_SHIPMENT:
      const findShipmentById2 = state.shipment.find((val) => String(val.id) === String(action.payload));
      const removeShipment = findShipmentById2.pop();
      return {
        shipment: removeShipment,
      };

    default:
      return state;
  }
};

export default shipmentReducer;
