function getParentForm(el){
	while((el=el.parentNode))
		if(el.nodeName.toLowerCase()=='form')break
	return el
}
function clearInput(el){
	el=$('#'+el)
	el.find('*').each(function(){
		if(this.value){
			this.defaultValue=this.value
			this.onfocus=function(){
				if(!!this.value)this.value=''
			}
			this.onblur=function(){
				if(this.value=='')this.value=this.defaultValue
			}
		}
	})
}
/*Y29kZSBieSBwbHprbg==*/