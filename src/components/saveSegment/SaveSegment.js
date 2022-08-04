import React, { Component } from "react";
import * as S from "./style";
import { 
    Link,
    Input,
    Text,
    Dropdown,
    Icon,
    Heading
 } from "@innovaccer/design-system";
 import "@innovaccer/design-system/css";

 const options=[
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state"  } 
]

class SaveSegment extends Component {
    state = {
        openSaveSegSheet: false,
        schemaList: [],
        schemaOptions: options
    }

  openSaveSegment = () => {
    this.setState({
      openSaveSegSheet: true,
    });
  };

  getSchema = (schema) => {
    return (
        <Dropdown
            className="pb-6"
            selected={schema}
            options={options}
            disabled={true}
        />
    )
  }
  
  onChange = (option) => {
    this.setState({
        activeOption: option
    })
  }

  addSchema= () => {
    if(this.state.activeOption){
        const selectedOption = options.filter((option) => {
            return option.value === this.state.activeOption
        }) 
        this.setState({
            schemaList: [...this.state.schemaList, selectedOption]
        })
        const refreshedOptions = this.state.schemaOptions.filter((option) => {
            return option.value !== selectedOption[0].value
        }) 
        this.setState({
            schemaOptions: refreshedOptions
        })
    }
  }

  sendSchema = () => {
      fetch('https://webhook.site/', {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({"hello": "hello"})
      })
      .then(() => {
          console.log("i got")
      })
      .catch(() => {
          console.log("let's see")
      })
  }

  render() {

    const schemaNodes = this.state.schemaList.map(this.getSchema)
    const footer = (<S.FooterWrapper className="mt-6 mb-6" >
        <S.SaveSegButton className="mr-4" onClick={this.sendSchema} >Save the Segment</S.SaveSegButton>
        <S.CancelSegButton>Cancel</S.CancelSegButton>
    </S.FooterWrapper>)

    const header = (<S.FlexWrapper alignItems="center">
        <Icon name="file" appearance="white" />
        <Heading appearance='white'>Saving Segment</Heading>
        <Dropdown 
            className="w-25 mb-6 mt-6"
            options={this.state.schemaOptions}
            placeholder="select"
            onChange={this.onChange}
            />
    </S.FlexWrapper>)
    return (
      <div>
        <S.StyledButton
          appearance="transparent"
          size="large"
          onClick={this.openSaveSegment}
        >
          Save Segment
        </S.StyledButton>
        <S.StyledSidesheet
            open={this.state.openSaveSegSheet}
            header={header}
            footer={footer}
        >
        <div className="pt-6">
            <Text weight="strong">Enter the Name of the Segment</Text>
            <Input className="mt-6 mb-6" placeholder="Name of the segment" />
            <Text weight="strong" className="mt-4 mb-4">To save you segment, you need to add the schemas to build the query</Text>
            <S.SchemaWrapper className="mt-6 p-6" >
                {schemaNodes}
            </S.SchemaWrapper>
            <Link onClick={this.addSchema} >+ Add new schema</Link>
            </div>
        </S.StyledSidesheet>
      </div>
    );
  }
}


export default SaveSegment