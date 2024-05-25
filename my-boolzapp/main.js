'use strict';


console.log('ok');

// creo variabile per inizializzare vue 
const { createApp } = Vue

createApp({
  data() {
    return {
        message: 'Hello Vue!',
        // array di oggetti (contacts)
        contacts: [
        {
            name: 'Monkey D Luffy',
            avatar: '/my-boolzapp/img/luffy.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Barbanera',
            avatar: '/my-boolzapp/img/barbanera.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Chopper',
            avatar: '/my-boolzapp/img/chopper.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Doffy',
            avatar: '/my-boolzapp/img/doffy.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Franky',
            avatar: '/my-boolzapp/img/franky.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Sanji',
            avatar: '/my-boolzapp/img/sanji.jpeg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Uta',
            avatar: '/my-boolzapp/img/uta.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Perona',
            avatar: '/my-boolzapp/img/Perona,jpg.webp',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
           
        }
        ],
        // definisco indice di partenza
        currentIndex: 0,
        // definisco variabile input con stringa vuota di partenza
        inputText:'',

    };
  },

  methods: {
    setAvatar(index) {
      console.log('avatar in posizione:', index);
      this.currentIndex = index;
    },
    addNewMessage() {
         // indice del contatto corrente
         const currentIndex = this.currentIndex;
         // creo un nuovo oggetto messaggio con la data attuale e il testo dall'input
         const newMessage = {
             date: new Date().toLocaleString(),
             message: this.inputText,
             status: 'sent'
         };
         // aggiungo il nuovo messaggio all'array messages del contatto corrente
         this.contacts[currentIndex].messages.push(newMessage);
         // resetto il campo di input
         this.inputText = '';
         
    },
    sendText() {
        // al click del tasto enter lancio funzione sendText che aggiunge messaggio
        this.addNewMessage();
        setTimeout(() => {
            this.autoMessage();
        }, 1000);
        
  
    },
    // creo funzione che manda un messaggio automatico dopo 1 secondo
    autoMessage() {
        const currentIndex = this.currentIndex;
        const autoMex ={
            date: new Date().toLocaleString(),
            message: 'ok',
            status: 'received'
        };
        this.contacts[currentIndex].messages.push(autoMex);
    },

  }
}).mount('#app');
