
var making =  (function () {
    

    var rec = [
        {
            in: ['Земля', 'Вода'],
            out: 'Грязь'
        },
        {
            in: ['Вода', 'Огонь'],
            out: 'Пар'
        },
        {
            in: ['Огонь', 'Земля'],
            out: 'Лава'
        },
        {
            in: ['Земля', 'Земля', 'Огонь'],
            out: 'Стекло'
        }

    ];


  

    function doCraft (Items) {

        var outputValue = '';
        for (var i = 0; i < rec.length; i++) {

            var selectedRule = rec[i].input.slice();
            var numberOfTheSameItem = 0;

            for (var j = 0; j < Items.length; j++) {

                var index = selectedRule.indexOf(Items[j]);
                if ( index >= 0 ) {
                    selectedRule.splice(index, 1);
                    numberOfTheSameItem++;
                }
            }

            if (selectedRule.length === 0 && numberOfTheSameItem === Items.length) {
                outputValue = rec[i].out;
            }


        }


        return (outputValue.length !== 0) ? outputValue : 0;
    }
    return {
        doCraft : doCraft
    };
})();
