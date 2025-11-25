import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText
} from "@ionic/react";

const DivisApp07144106: React.FC = () => {
  const [quetzales, setQuetzales] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(null);

  const convertir = () => {
    const dolares = quetzales / 8;
    setResultado(dolares);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Conversor de Divisas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonItem>
          <IonLabel position="stacked">Cantidad en Quetzales</IonLabel>
          <IonInput
            type="number"
            value={quetzales}
            onIonInput={(e) => setQuetzales(Number(e.detail.value))}
          />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={convertir}>
          Convertir a Dólares
        </IonButton>

        {resultado !== null && (
          <IonText className="ion-margin-top">
            <h2>USD {resultado.toFixed(2)}</h2>
          </IonText>
        )}

      </IonContent>
    </IonPage>
  );
};

export default DivisApp07144106;
