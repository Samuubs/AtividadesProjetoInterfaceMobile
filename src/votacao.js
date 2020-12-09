import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const cidadesArray = [
    {
        nome: "Fortaleza",
        votos: 0
    },
    {
        nome: "Quixadá",
        votos: 0
    },
    {
        nome: "Limoeiro do Norte",
        votos: 0
    },
    {
        nome: "Juazeiro",
        votos: 0
    },
]

const useUpdate = () => {
    const set = useState(0)[1];
    return () => set((s) => s + 1);
};

const votacao = () => {
    const [cidades, setCidades] = useState(cidadesArray);
    const [maisVotadas, setMaisVotadas] = useState("");
    const [menosVotadas, setMenosVotadas] = useState("");
    const update = useUpdate();

    const calcularVotos = () => {
        const cidadesArray = cidades.reduce((obj, item) => ((obj[item.nome] = item.votos), obj), {});
        const votosCidades = Object.values(cidadesArray);
        
        const maxVotos = Math.max(...votosCidades);
        const minVotos = Math.min(...votosCidades);

        let maisVotados = "";
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i].votos === maxVotos) {
                maisVotados = maisVotados + cidades[i].nome + ", ";
            }
        }

        let maisVotadosFormatado = maisVotados.slice(0, -2);
        setMaisVotadas(maisVotadosFormatado);

        let menosVotados = "";
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i].votos === minVotos) {
                menosVotados = menosVotados + cidades[i].nome + ", ";
            }
        }

        let menosVotadosFormatado = menosVotados.slice(0, -2);
        setMenosVotadas(menosVotadosFormatado);
    }

    const votar = (cidade) => {
        cidade.votos++;
        calcularVotos();
        update();
    }

    return (
        <View>
            <View style={{backgroundColor: "#ddd", paddingHorizontal: 14, paddingVertical: 24, marginBottom: 20}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>MAIS VOTADA(s): {maisVotadas}</Text>
                <Text>MENOS VOTADA(s): {menosVotadas}</Text>
            </View>

            { cidades.map((cidade) => {
                return <Text key={cidade.nome} style={{fontSize: 20, padding: 5}}>{cidade.nome}: {cidade.votos}</Text>
            })}

            <View style={{marginTop: 40, alignSelf: "center", flexDirection: "row", width: "70%", flexWrap: "wrap", justifyContent: "space-between" }}>
                { cidades.map((cidade) => {
                    return <TouchableOpacity key={cidade.nome} onPress={ () => votar(cidade) } style={{margin: 5, backgroundColor: "#1f6feb", padding: 14, width: 100, height: 40, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{textAlign: "center", color:"#fff", fontWeight: "bold"}}>{cidade.nome}</Text>
                    </TouchableOpacity>
                })}
            </View>
        </View>
    )
}

export default votacao;