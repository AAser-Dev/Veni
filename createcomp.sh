#!/bin/bash

if [ -z "$1" ]; then
  echo "❌ لازم تكتب اسم الكومبوننت"
  exit 1
fi

COMPONENT_NAME=$1
DIR="./src/Components/$COMPONENT_NAME"

# إنشاء مجلد للكومبوننت
mkdir -p $DIR

# إنشاء ملف JSX بداخله RFC + استيراد CSS
cat <<EOL > $DIR/$COMPONENT_NAME.jsx
import React from 'react'
import './$COMPONENT_NAME.css'

const $COMPONENT_NAME = () => {
  return (
    <div className="$COMPONENT_NAME">
      $COMPONENT_NAME Component
    </div>
  )
}

export default $COMPONENT_NAME
EOL

# إنشاء ملف CSS فاضي بنفس الاسم
cat <<EOL > $DIR/$COMPONENT_NAME.css
.$COMPONENT_NAME {
  /* أضف ستايلك هنا */
}
EOL

# تعديل ملف App.js لإضافة الاستيراد والاستخدام
APP_FILE="./src/App.js"

if [ -f "$APP_FILE" ]; then
  # إضافة import للكومبوننت (لو مش موجود)
  if ! grep -q "import $COMPONENT_NAME from './Components/$COMPONENT_NAME/$COMPONENT_NAME';" "$APP_FILE"; then
    sed -i "1i import $COMPONENT_NAME from './Components/$COMPONENT_NAME/$COMPONENT_NAME';" "$APP_FILE"
    echo "📥 تم إضافة import $COMPONENT_NAME في App.js"
  fi

  # إضافة الكومبوننت داخل return (لو مش موجود)
  if ! grep -q "<$COMPONENT_NAME />" "$APP_FILE"; then
    sed -i "s@</div>@  <$COMPONENT_NAME />\n    </div>@" "$APP_FILE"
    echo "📥 تم استدعاء <$COMPONENT_NAME /> في JSX داخل App.js"
  fi
else
  echo "⚠️ ملف App.js مش موجود في src/"
fi

echo "✅ Component $COMPONENT_NAME جاهز مع CSS ومضاف في App.js"

