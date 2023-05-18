class ConnectedList {
    head;
    constructor(){
        let total_len = arguments.length
        this.head = new Elem(arguments[0], null)
        let counter = 1
        let prev_element = this.head
        while (counter < total_len){
            let next_element = new Elem(arguments[counter], null)
            prev_element.link = next_element
            prev_element = next_element
            counter += 1

        }
    
    }


    print(){
        let temp_head = this.head
        let temp_str = String()
        while (temp_head != null){
            temp_str = temp_str + `${temp_head.value} `
            temp_head = temp_head.link
        }
        return temp_str
    }

    append(new_value){
        if (this.head == null){
            this.head = new Elem(new_value)
        }else{
            let temp_head = this.head
            while (temp_head.link != null){
                temp_head = temp_head.link
            }
            temp_head.link = new Elem(new_value, null)
        }
    }

    length(){
        let counter = 0
        let temp_head = this.head
        while (temp_head != null){
            temp_head = temp_head.link
            counter += 1
        }
        return counter 
    }

    // 
    remove(value_to_remove){
        let temp_head = this.head
        let prev_element = null
        while (temp_head.link != null){
            prev_element = temp_head
            temp_head = temp_head.link
            if (temp_head.value == value_to_remove){
                prev_element.link = temp_head.link
            }
        }
    }

    clear(){
        this.head = null
    }

    // 
    insert(index, new_value){
        let counter = 0
        let temp_head = this.head
        let prev_element = null
        while (temp_head.link != null){
            prev_element = temp_head
            temp_head = temp_head.link
            counter += 1
            if (counter == index){
                let new_node = new Elem(new_value)
                prev_element.link = new_node
                new_node.link = temp_head
                break
            }
        }
    }

    //
    merge(anotherList){
        let temp_head = this.head
        let prev_element = null
        while (temp_head != null){
            prev_element = temp_head
            temp_head = temp_head.link
        }
        prev_element.link = anotherList.head
        
        
    }

    searchByValue(value_to_search){
        let temp_head = this.head
        while (temp_head.link) {
            if (temp_head.value == value_to_search){
                return temp_head
            }
        }
    }


}

class Elem {
    link;
    value;
    constructor(value, link_next){
        this.value = value
        this.link = link_next
    }
}