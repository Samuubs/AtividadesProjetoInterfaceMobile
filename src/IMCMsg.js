import React from 'react';
import { View, Text } from 'react-native';


const IMCMsg = ({imc}) => {
    let msg = '';
    let cor = "red";

    if (imc < 17) msg = 'Muito abaixo do peso'
        else if (imc > 17 && imc < 18.49) msg = 'Abaixo do peso'
        else if (imc > 18.5 && imc < 24.99) { msg = 'Peso normal', cor = 'blue' }
        else if (imc > 25 && imc < 29.99) msg = 'Acima do peso'
        else if (imc > 30 && imc < 34.99) msg = 'Obesidade I'
        else if (imc > 35 && imc < 39.99) msg = 'Obesidade II (severa)'
        else msg = 'Obesidade III (mórbida)'

    return (
        <View>
            <Text style={{fontSize: 24, textAlign: "center", margin: 10, fontWeight: "bold", color: cor}}>
                {msg}
            </Text>
        </View>
    );
}

export default IMCMsg;