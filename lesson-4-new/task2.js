var image = {
    width: 100,
    height: 800,
    title: 'Cool image'
  };
  function multiplyNumeric( obj ) {
    for (var key in obj) {
      if ( !isNaN(obj[key])){
        obj[key] += obj[key] ;
      };
    };
    return obj;
  };

  module.exports = {
    multiplyNumeric,
  };

  console.log(multiplyNumeric(image) );
