export const Status = {
    BACKLOG: 'backlog',
    INPROGRESS: 'process',
    READY: 'ready',
    BASKET: 'trash',
  };
  
  export const StatusLabel = {
    [Status.BACKLOG]: 'Бэклог',
    [Status.INPROGRESS]: 'В процессе',
    [Status.READY]: 'Готово',
    [Status.BASKET]: 'Корзина',
  };
  
  export const StatusArray = [
    Status.BACKLOG,
    Status.INPROGRESS,
    Status.READY,
    Status.BASKET,
  ];