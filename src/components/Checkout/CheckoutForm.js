import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    View
} from "react-native";
import * as yup from 'yup'
import {Formik} from 'formik'
import {useState, useContext, useEffect} from "react";

import {CartContext} from '../../contexts/CartContext'
import {AuthContext} from '../../contexts/AuthContext'

import {BASE_URL} from "../../api/api";

const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
    first_name: yup
        .string()
        .required('First Name is Required'),
    last_name: yup
        .string()
        .required('Last Name is Required'),
    address: yup
        .string()
        .required('Address is Required'),
    contact_number: yup
        .string()
        .required('Phone number is Required'),
    location: yup
        .string()
        .required('Location is Required'),
    city: yup
        .string()
        .required('City is Required'),
});

const CheckoutForm = ({navigation}) => {
    const [loader, setLoader] = useState(false);
    const [manageItemList, setManageItemList] = useState([]);
    const {user} = useContext(AuthContext);

    const {
        items,
        getTotalDeliveryCharge,
        getTotalCostWithDelivery,
        getItemsCount,
        getTotalPrice,
        setItems,
        location,
        setLocation
    } = useContext(CartContext);

    const manageItemsData = () => {
        let itemList = [];
        items.map((item) => {
            let cartItemObj = {
                id: item.product.id,
                pro_id: item.product.pro_id,
                title: item.product.pro_id,
                brand: item.product.brand,
                product_image: item.product.image,
                price: item.product.app_price,
                old_price: item.product.old_price,
                weight: item.product.weight,
                size: item.product.size,
                buy_one_get_one: item.product.buy_one_get_one,
                limit_buy: item.product.limit_buy,
                active: item.product.active,
                quantity: item.qty
            };
            itemList.push(cartItemObj)
        });
        setManageItemList(itemList)
    };

    useEffect(() => {
        manageItemsData()
    }, []);


    const showInvoiceErrorAlert = () => {
        Alert.alert(
            "Oops..",
            "Please Try again",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Ok",
                    onPress: () => console.log("Ok Pressed")
                }
            ]
        );
    };

    const showLocationErrorAlert = () => {
        Alert.alert(
            "",
            "Please Select a Delivery Area!",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Ok",
                    onPress: () => console.log("Ok Pressed")
                }
            ]
        );
    };


    return (
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={{
                first_name: user.first_name === 'test' ? "" : user.first_name,
                last_name: user.last_name === 'test' ? "" : user.last_name,
                email: '',
                address: '',
                address_type: '',
                contact_number: user.contact_number,
                location: '',
                city: '',
                notes: ''
            }}
            onSubmit={(values, {resetForm}) => {
                setTimeout(async () => {
                    if (location == "") {
                        showLocationErrorAlert();
                        return
                    }

                    setLoader(true);
                    try {
                        const response = await fetch(`${BASE_URL}/invoices/api/cart-checkout-api-view/`, {
                            method: "POST",
                            body: JSON.stringify({
                                first_name: values["first_name"],
                                last_name: values["last_name"],
                                address: values["address"],
                                address_type: values["address_type"],
                                email: values["email"],
                                contact_number: values["contact_number"],
                                location: values["location"],
                                gender: "M",
                                is_login_user: true,
                                login_user_id: user.id,
                                city: values["city"],
                                notes: values["notes"],
                                delivery_method: 1,
                                delivery_charge: getTotalDeliveryCharge(),
                                count: getItemsCount(),
                                total: getTotalCostWithDelivery(),
                                price: getTotalPrice(),
                                platform: "Mobile",
                                cart_list: manageItemList,
                            }),
                            headers: {'Content-type': 'application/json'}
                        });
                        const data = await response.json();
                        if (data["context"]["success"] === true) {
                            // showInvoiceAlert(data["context"]["invoiceId"]);
                            navigation.navigate('InvoiceStack', {
                                screen: 'Invoice',
                                params: {
                                    InvoiceId: data["context"]["invoiceId"]
                                }
                            });
                            setItems([]);
                            setLoader(false);
                            setLocation('')
                            resetForm()
                        } else {
                            showInvoiceErrorAlert()
                        }
                    } catch (e) {
                        setLoader(false);
                        showInvoiceErrorAlert()
                    }

                }, 400);
            }}
        >
            {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  isValid,
              }) => (
                <>
                    <View style={{flex: 1, flexDirection: "row"}}>
                        <View style={{flex: 1}}>
                            <View style={{marginBottom: 10}}>
                                <TextInput
                                    name="first_name"
                                    placeholder="First Name * "
                                    style={styles.checkoutAddressForm}
                                    onChangeText={handleChange('first_name')}
                                    onBlur={handleBlur('first_name')}
                                    value={values.first_name}
                                    selectionColor="#183153"
                                />
                                {errors.first_name &&
                                    <Text style={{fontSize: 11, color: 'red', marginLeft: 2}}>{errors.first_name}</Text>
                                }
                            </View>
                        </View>
                        <View style={{flex: 1}}>
                            <View style={{marginBottom: 10}}>
                                <TextInput
                                    name="last_name"
                                    placeholder="Last Name * "
                                    style={styles.checkoutAddressForm}
                                    onChangeText={handleChange('last_name')}
                                    onBlur={handleBlur('last_name')}
                                    value={values.last_name}
                                    selectionColor="#183153"
                                />
                                {errors.last_name &&
                                    <Text style={{fontSize: 11, color: 'red', marginLeft: 2}}>{errors.last_name}</Text>
                                }
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <TextInput
                            name="email"
                            placeholder="Email Address"
                            style={styles.checkoutAddressForm}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            selectionColor="#183153"
                        />
                        {errors.email &&
                            <Text style={{fontSize: 11, color: 'red', marginLeft: 2}}>{errors.email}</Text>
                        }
                    </View>
                    <View style={{marginBottom: 10}}>
                        <TextInput
                            name="contact_number"
                            placeholder="Phone Number * "
                            style={styles.checkoutAddressForm}
                            onChangeText={handleChange('contact_number')}
                            onBlur={handleBlur('contact_number')}
                            value={values.contact_number}
                            selectionColor="#183153"
                            editable={false}
                        />
                        {errors.contact_number &&
                            <Text style={{fontSize: 11, color: 'red', marginLeft: 2}}>{errors.contact_number}</Text>
                        }
                    </View>
                    <View style={{marginBottom: 10}}>
                        <TextInput
                            name="address"
                            placeholder="Address (Ex. street name, street number, house/flat number) * "
                            style={styles.checkoutAddressForm}
                            onChangeText={handleChange('address')}
                            onBlur={handleBlur('address')}
                            value={values.address}
                            selectionColor="#183153"
                        />
                        {errors.address &&
                            <Text style={{fontSize: 11, color: 'red', marginLeft: 2}}>{errors.address}</Text>
                        }
                    </View>
                    <View style={{marginBottom: 10}}>
                        <TextInput
                            name="location"
                            placeholder="Your area ( Ex. Mirpur, Dhanmondi ) *"
                            style={styles.checkoutAddressForm}
                            onChangeText={handleChange('location')}
                            onBlur={handleBlur('location')}
                            value={values.location}
                            selectionColor="#183153"
                        />
                        {errors.location &&
                            <Text style={{fontSize: 11, color: 'red', marginLeft: 2}}>{errors.location}</Text>
                        }
                    </View>
                    <View style={{marginBottom: 10}}>
                        <TextInput
                            name="city"
                            placeholder="City ( Ex. Dhaka, Khulna, Chittagong ) *"
                            style={styles.checkoutAddressForm}
                            onChangeText={handleChange('city')}
                            onBlur={handleBlur('city')}
                            value={values.city}
                            selectionColor="#183153"
                        />
                        {errors.city &&
                            <Text style={{fontSize: 11, color: 'red', marginLeft: 2}}>{errors.city}</Text>
                        }
                    </View>

                    <TextInput
                        name="notes"
                        placeholder="Notes for order, delivery (optional). e.g. specific delivery date or packaging *"
                        style={styles.checkoutAddressNoteForm}
                        onChangeText={handleChange('notes')}
                        onBlur={handleBlur('notes')}
                        value={values.notes}
                        selectionColor="#183153"
                    />
                    {errors.notes &&
                        <Text style={{fontSize: 10, color: 'red'}}>{errors.notes}</Text>
                    }

                    <View style={{flexDirection: "row", marginBottom: 10, flexWrap: "wrap"}}>
                        <View>
                            <Text style={{fontSize: 13, marginRight: 2}}>
                                By Clicking Place an order you also agree to all the
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("TermsAndCondition")}>
                                <Text style={{color: "blue", fontSize: 13}}>Terms & Conditions</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.placeAnOrder}>{loader ? "Loading..." : "Place your order"}</Text>
                    </TouchableOpacity>
                    <View style={{marginBottom: 50}}/>
                </>
            )}
        </Formik>
    )
};

const styles = StyleSheet.create({
    checkoutAddressForm: {
        height: 40,
        marginLeft: 2,
        marginRight: 3,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "#D9D9D9",
        color: "black"
    },
    checkoutAddressNoteForm: {
        height: 60,
        marginLeft: 2,
        marginRight: 3,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "#D9D9D9",
        marginBottom: 10,
    },
    placeAnOrder: {
        padding: 7,
        backgroundColor: "#183153",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: "bold",
        borderColor: "#183153",
        color: "#FFF",
        marginBottom: 10,
        overflow: "hidden",
    },
    loginContainer: {
        width: '80%',
        alignItems: 'center',
        padding: 10,
        elevation: 10,
        backgroundColor: '#e6e6e6'
    },
    textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },

});


export default CheckoutForm;