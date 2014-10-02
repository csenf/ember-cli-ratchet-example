export default function(){
  this.transition(
    this.fromRoute('settings.index'),
    this.toRoute('settings.info'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
 this.transition(
    this.fromRoute('settings.index'),
    this.toRoute('settings.profile'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
