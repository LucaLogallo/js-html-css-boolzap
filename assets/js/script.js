const app = new Vue ({
  el : "#app",
  data: {
    mioName: "Lucia",
    activeIndex : 0,
    now:dayjs().format('DD/MM/YYYY HH:mm:ss'),
    messaggio:"",
    searchName : '',
    deleteMex: false,
    indexMex: 0,
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ]
  },
  methods:{
    prefixImg(index){
      this.urlImg="";
      return this.prefixImg +this.contacts[index].avatar
    },
    visible(index){
      console.log(this.contacts[index].visible)
      this.contacts[index].visible = !this.contacts[index].visible;
      console.log(this.contacts[index].visible);
    },
    addText(){
      
      this.contacts[this.activeIndex].messages.push(
        {
          date:dayjs().format('DD/MM/YYYY HH:mm:ss'),
          text:this.messaggio,
          status:'sent'
        }
        );
      this.messaggio = '';
      setTimeout(()=>{
        this.contacts[this.activeIndex].messages.push(
          {
            date:dayjs().format('DD/MM/YYYY HH:mm:ss'),
            text:'ok',
            status:'received'
          }
          )
        },4000)
    },
    eliminaMex(index){
      this.deleteMex = !this.deleteMex;
      this.indexMex = index;
    }
    /* searchNames(){
      console.log(this.searchNames); 
      console.log(this.contacts);
      console.log(this.searchName.toLowerCase().split(' ').every(v =>this.contacts.name.toLowerCase().includes(v)));
       
      
      
      if(this.searchName){
        console.log(this.searchNames); 
        
        return this.contacts.filter((item)=>{
          return this.searchName.toLowerCase().split(' ').every(v =>this.contacts.name.toLowerCase().includes(v))
        })
      }else{

        return this.contacts;
      }
      
    
    } */
  }
})
