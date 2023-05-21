
    var GLOBAL = {
        "pickup_location": {
        "type": "select",
    "one_way": {
        "form": {"id": "dep_pickup_location" },
    "ctn": {"id": "dep_pickup_location_ctn" },
    "values": "",
    "index": ""
            },
    "return": {
        "form": {"id": "ret_pickup_location" },
    "ctn": {"id": "ret_pickup_location_ctn" },
    "values": "",
    "index": ""
            }
        },
    "drop_location": {
        "type": "select",
    "one_way": {
        "form": {"id": "dep_drop_location" },
    "ctn": {"id": "dep_drop_location_ctn" },
    "values": "",
    "index": ""
            },
    "return": {
        "form": {"id": "ret_drop_location" },
    "ctn": {"id": "ret_drop_location_ctn" },
    "values": "",
    "index": ""
            }
        },
    "passengers": { // Peut etre que sens aller -> dans ce cas là
        "type": "number",
    "form": {"id": "passengers" },
    "ctn": {"id": "passengers_ctn" },
    "values": "1"
        },
    "luggages": {
        "type": "number",
    "form": {"id": "luggages" },
    "ctn": {"id": "luggages_ctn" },
    "values": "1"
        },
    "pickup_date": {
        "type": "date",
    "one_way": {
        "form": {"id": "dep_pickup_date" },
    "ctn": {"id": "dep_pickup_date_ctn" },
    "values": ""
            },
    "return": {
        "form": {"id": "ret_pickup_date" },
    "ctn": {"id": "ret_pickup_date_ctn" },
    "values": ""
            }
        },
    "departure_hours": {
        "type": "select",
    "one_way": {
        "form": {"id": "dep_departure_hours" },
    "ctn": {"id": "dep_departure_hours_ctn" },
    "values": ""
            },
    "return": {
        "form": {"id": "ret_departure_hours" },
    "ctn": {"id": "ret_departure_hours_ctn" },
    "values": "",
    "index": ""
            }
        },
    "notes": {
        "type": "textarea",
    "form": {"id": "notes" },
    "ctn": {"id": "notes_ctn" },
    "values": ""
        },
    "name": {
        "type": "textarea",
    "form": {"id": "client_name" },
    "ctn": {"id": "client_name_ctn" },
    "values": ""
        },
    "email": {
        "type": "textarea",
    "form": {"id": "email" },
    "ctn": {"id": "email_ctn" },
    "values": ""
        },
    "phone_number": {
        "type": "textarea",
    "form": {"id": "phone_number" },
    "ctn": {"id": "phone_number_ctn" },
    "values": ""
        },
    "country": {
        "type": "select",
    "form": {"id": "country" },
    "ctn": {"id": "country_ctn" },
    "values": "",
    "index": ""
        },
    "pickup_address": {
        "type": "textarea",
    "one_way": {
        "form": {"id": "dep_pickup_address" },
    "ctn": {"id": "dep_pickup_address_ctn" },
    "values": ""
            },
    "return": {
        "form": {"id": "ret_pickup_address" },
    "ctn": {"id": "ret_pickup_address_ctn" },
    "values": ""
            }
        },
    "drop_address": {
        "type": "textarea",
    "one_way": {
        "form": {"id": "dep_drop_address" },
    "ctn": {"id": "dep_drop_address_ctn" },
    "values": ""
            },
    "return": {
        "form": {"id": "ret_drop_address" },
    "ctn": {"id": "ret_drop_address_ctn" },
    "values": ""
            }
        },
        "pickup_flight_no": {
            "type": "textarea",
    "one_way": {
        "form": {"id": "dep_pickup_flight_no" },
    "ctn": {"id": "dep_pickup_flight_no_ctn" },
    "values": ""
            },
    "return": {
        "form": {"id": "ret_pickup_flight_no" },
    "ctn": {"id": "ret_pickup_flight_no_ctn" },
    "values": ""
            }
        },
        "drop_flight_no": {
        "type": "textarea",
    "one_way": {
        "form": {"id": "dep_drop_flight_no" },
    "ctn": {"id": "dep_drop_flight_no_ctn" },
    "values": ""
            },
    "return": {
        "form": {"id": "ret_drop_flight_no" },
    "ctn": {"id": "ret_drop_flight_no_ctn" },
    "values": ""
            }
        },
        "pickup_flight_arrival_from": {
        "type": "textarea",
    "one_way": {
        "form": {"id": "dep_pickup_flight_arrival_from" },
    "ctn": {"id": "dep_pickup_flight_arrival_from_ctn" },
    "values": ""
            },
    "return": {
        "form": {"id": "ret_pickup_flight_arrival_from" },
    "ctn": {"id": "ret_pickup_flight_arrival_from_ctn" },
    "values": ""
            }
        },
        "drop_flight_departure_to": {
        "type": "textarea",
    "one_way": {
        "form": {"id": "dep_drop_flight_departure_to" },
    "ctn": {"id": "dep_drop_flight_departure_to_ctn" },
    "values": ""
            },
    "return": {
        "form": {"id": "ret_drop_flight_departure_to" },
    "ctn": {"id": "ret_drop_flight_departure_to_ctn" },
    "values": ""
            }
        },

        "pickup_train_no": {
            "type": "textarea",
            "one_way": {
                "form": { "id": "dep_pickup_train_no" },
                "ctn": { "id": "dep_pickup_train_no_ctn" },
                "values": ""
            },
            "return": {
                "form": { "id": "ret_pickup_train_no" },
                "ctn": { "id": "ret_pickup_train_no_ctn" },
                "values": ""
            }
        },
        "drop_train_no": {
            "type": "textarea",
            "one_way": {
                "form": { "id": "dep_drop_train_no" },
                "ctn": { "id": "dep_drop_train_no_ctn" },
                "values": ""
            },
            "return": {
                "form": { "id": "ret_drop_train_no" },
                "ctn": { "id": "ret_drop_train_no_ctn" },
                "values": ""
            }
        },
        "pickup_train_arrival_from": {
            "type": "textarea",
            "one_way": {
                "form": { "id": "dep_pickup_train_arrival_from" },
                "ctn": { "id": "dep_pickup_train_arrival_from_ctn" },
                "values": ""
            },
            "return": {
                "form": { "id": "ret_pickup_train_arrival_from" },
                "ctn": { "id": "ret_pickup_train_arrival_from_ctn" },
                "values": ""
            }
        },
        "drop_train_departure_to": {
            "type": "textarea",
            "one_way": {
                "form": { "id": "dep_drop_train_departure_to" },
                "ctn": { "id": "dep_drop_train_departure_to_ctn" },
                "values": ""
            },
            "return": {
                "form": { "id": "ret_drop_train_departure_to" },
                "ctn": { "id": "ret_drop_train_departure_to_ctn" },
                "values": ""
            }
        },

        "pickup_train_station": {
            "type": "textarea",
            "one_way": {
                "form": { "id": "dep_pickup_train_station" },
                "ctn": { "id": "dep_pickup_train_station_ctn" },
                "values": ""
            },
            "return": {
                "form": { "id": "ret_pickup_train_station" },
                "ctn": { "id": "ret_pickup_train_station_ctn" },
                "values": ""
            }
        },
        "drop_train_station": {
            "type": "textarea",
            "one_way": {
                "form": { "id": "dep_drop_train_station" },
                "ctn": { "id": "dep_drop_train_station_ctn" },
                "values": ""
            },
            "return": {
                "form": { "id": "ret_drop_train_station" },
                "ctn": { "id": "ret_drop_train_station_ctn" },
                "values": ""
            }
        },


    "pickup_disney_location": {
        "type": "select",
    "one_way": {
        "form": {"id": "dep_pickup_disney_location" },
    "ctn": {"id": "dep_pickup_disney_location_ctn" },
    "values": ""
            },
    "return": {
        "form": {"id": "ret_pickup_disney_location" },
    "ctn": {"id": "ret_pickup_disney_location_ctn" },
    "values": ""
            }
        },
    "drop_disney_location": {
        "type": "select",
    "one_way": {
        "form": {"id": "dep_drop_disney_location" },
    "ctn": {"id": "dep_drop_disney_location_ctn" },
    "values": ""
            },
    "return": {
        "form": {"id": "ret_drop_disney_location" },
    "ctn": {"id": "ret_drop_disney_location_ctn" },
    "values": ""
            }
        },
    "book_return": {
        "type": "check",
    "form": {"id": "book_return" },
    "ctn": {"id": "book_return_ctn" },
    "values": false
        },

    };
